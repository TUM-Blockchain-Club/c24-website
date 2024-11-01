import { Text } from "@/components/text";
import { Button } from "@/components/button";
import { Ticket } from "@/components/ticket";

const Tickets = () => {
  return (
    <section className="w-full" id="tickets">
      <div className="flex w-full justify-center items-center">
        <Text textType={"sub_hero"} className="text-gradient">
          Tickets
        </Text>
      </div>
      <div className="w-full flex justify-center">
        <div className="sm:flex mt-20 justify-center sm:space-x-10 space-y-10 sm:space-y-0 w-7/8 sm:w-full">
          <Ticket price={10} ticketType={"student"} title="Student" />
          <Ticket price={129} ticketType={"regular"} title="Regular" />
          <Ticket price={499} ticketType={"vip"} title="VIP" />
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <Button disabled>Tickets</Button>
      </div>
    </section>
  );
};

export default Tickets;
