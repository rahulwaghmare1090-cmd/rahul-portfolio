export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-10 border border-slate-800 text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">Contact Me</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-slate-400">rahulwaghmare1090@gmail.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-slate-400">(+91)-8669659526</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-slate-400">Hyderabad, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
